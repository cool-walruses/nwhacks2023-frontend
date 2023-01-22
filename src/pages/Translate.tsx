import { css } from "@emotion/react"
import { Link } from "wouter"
import NavBar from "../components/NavBar"
import { HOME_PADDING, HOME_PADDING_EXTRA } from "../const/styles"
import { CODE_BLOCK_LANG, PROGRAM_LANG } from "../const/languages"
import Message from "./translate/Message"
import Input from "./translate/Input"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BACKEND_URL } from "../const/urls"
import { useEffect, useRef, useState } from "react"
import React from "react"
import Select from 'react-select'

const Translate: React.FC = () => {
  const scrollRef = useRef<any>();

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState<PROGRAM_LANG>(PROGRAM_LANG.PYTHON);
  const [history, setHistory] = useState<any[]>([]);
  const { data, error: isError, isRefetching, refetch } = useQuery(["id", input],
    () => axios.post(`${BACKEND_URL}/generator/generate`, {"programming_language": language, prompt: input}).then((res) => res.data),
    { retry: false, enabled: false, initialData: {}, notifyOnChangeProps: ['data', 'isLoading'],
      onSuccess: (data) => {
        setHistory([...history, { origin: "ai", text: data?.code ?? data?.message, language: data?.code ? language : undefined }]);
        setInput("");
      },
      onError: (err) => {
        setHistory([...history, { origin: "ai", text: (err as any)?.response?.data?.message }])
      }
    }
  );

  console.log(CODE_BLOCK_LANG[language]);

  useEffect(() => {
    if (input !== "") {
      setHistory([...history, { origin: "user", language: language, text: input }]);
      refetch();
    }
  }, [input]);

  useEffect(() => {
    scrollToBottom();
  }, [history])

  const scrollToBottom = () => {
    if (scrollRef) scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const languageOptions = Object.values(PROGRAM_LANG).map((lang) => { return { value: lang, label: lang }});

  return (<>
    <NavBar fixed>
      <Link href="">Home</Link>
    </NavBar>

    <div
      css={css`
        font-size: 14px;
        width: 100%;
        padding-left: ${HOME_PADDING_EXTRA.LEFT};
        padding-right: ${HOME_PADDING_EXTRA.RIGHT};
        position: relative;
      `}
    >
      <div
        css={css`
          width: 100%;
          padding-top: 150px;
          padding-bottom: 150px;
          padding-left: ${HOME_PADDING.LEFT};
          padding-right: ${HOME_PADDING.RIGHT};
          display: flex;
          flex-direction: column;
          gap: 50px;
        `}
      >
        <Message
          origin="ai"
        >
          Hey there! Tell me what you want to know!
        </Message>

        {React.Children.toArray(history.map((hist) =>
          <Message
            origin={hist.origin}
            language={hist.origin === "user" ? hist.language : undefined}
            code={hist.language && hist.origin === "ai" ? { text: hist.text, language: hist.language } : undefined}
          >{hist.text}</Message>
        ))}

        {isRefetching && <Message origin="ai">...</Message>}

      </div>
      <div ref={scrollRef} />
      <div
        css={css`
          width: 100%;
          padding-left: ${HOME_PADDING_EXTRA.LEFT};
          padding-right: ${HOME_PADDING_EXTRA.RIGHT};
          height: 120px;
          position: fixed;
          bottom: 0;
          left: 0;
          background: #000000;
          z-index: 99999;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding-left: ${HOME_PADDING.LEFT};
            padding-right: ${HOME_PADDING.RIGHT};
            display: flex;
            align-items: center;
            justify-content: right;
            box-shadow: 0px 0px 13px -3px #000000;
          `}
        >
          <Input
            isLoading={isRefetching}
            handleSubmit={setInput}
          />
          <div
            css={css`
              position: absolute;
              margin-right: 60px;
              width: 150px;
            `}
          >
            <Select
              menuPlacement="top"
              value={{ value: language, label: language }}
              onChange={(e) => {
                if (e !== null && !isRefetching) setLanguage(e.value);
                }
              }
              options={languageOptions as any}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "#cccccc",
                  neutral0: "#222222",
                  neutral20: "#555555",
                  neutral60: "#333333",
                  neutral80: "#ffffff",
                  primary25: "#111111"
                }
              })}
            />
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Translate
