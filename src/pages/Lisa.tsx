import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../const/urls";
import { CopyBlock, tomorrowNight } from "react-code-blocks";

const Lisa: React.FC = () => {
  const input = {
    "programming_language" : "golang",
    "prompt" : "Écrire un script \"Bonjour le monde\""
  }

  const { data, error: isError, isLoading } = useQuery(["id", input],
    () => axios.post(`${BACKEND_URL}/generator/generate`, input).then((res) => res.data.code),
    { retry: false, cacheTime: 0 }
  );

  const output = {
    "code": "package principal\nimport \"fmt\"\n\nfunc principal() {\n\tfmt.Println(\"Bonjour le monde!\")\n}\n\n// Sortie:\n// Bonjour le monde!"
  };

  return (
    <CopyBlock
      text={data ?? ""}
      language="go"
      theme={tomorrowNight}
      showLineNumbers
      wrapLines
    />
  )
}

export default Lisa
