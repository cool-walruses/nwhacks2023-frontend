import { css } from "@emotion/react"
import { Link } from "wouter"
import NavBar from "../components/NavBar"
import { HOME_PADDING, HOME_PADDING_EXTRA } from "../const/styles"
import { PROGRAM_LANG } from "../const/languages"
import Message from "./translate/Message"
import Input from "./translate/Input"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BACKEND_URL } from "../const/urls"
import { useEffect, useState } from "react"
import React from "react"
import Select from 'react-select'

const Translate: React.FC = () => {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState<PROGRAM_LANG>(PROGRAM_LANG.PYTHON);
  const [history, setHistory] = useState<any[]>([]);
  const { data, error: isError, isLoading, refetch } = useQuery(["id", input],
    () => axios.post(`${BACKEND_URL}/generator/generate`, {"programming_language": language, prompt: input}).then((res) => res.data),
    { retry: false, enabled: false, initialData: {}, notifyOnChangeProps: ['data'],
      onSuccess: (data) => setHistory([...history, { origin: "ai", text: data?.code ?? data?.message, language: data?.code ? language : undefined }]),
    }
  );

  useEffect(() => {
    if (input !== "") {
      setHistory([...history, { origin: "user", language: language, text: input }]);
      refetch();
    }
  }, [input]);

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
          padding-bottom: 200px;
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
          Hey there! I'm DN!
        </Message>

        {React.Children.toArray(history.map((hist) =>
          <Message
            origin={hist.origin}
            language={hist.origin === "user" ? hist.language : undefined}
            code={hist.language && hist.origin === "ai" ? { text: hist.text, language: hist.language } : undefined}
          >{hist.text}</Message>
        ))}


        {/* <Message
          origin="user"
          language={PROGRAM_LANG.PYTHON}
        >
          Can I get... uhhh... beesechurger?
        </Message>


        <Message
          code={{text: output, language: PROGRAM_LANG.PYTHON}}
        /> */}
      </div>
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
            isLoading={isLoading}
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
              isDisabled={isLoading}
              menuPlacement="top"
              value={{ value: language, label: language }}
              onChange={(e) => {
                if (e !== null) setLanguage(e.value);
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
                  neutral90: "red",
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
