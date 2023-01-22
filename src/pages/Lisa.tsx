import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../const/urls";
import { CopyBlock } from "react-code-blocks";

const Lisa: React.FC = () => {
  const input = {
    "programming_language" : "golang",
    "source_language" : "french",
    "prompt" : "Écrire un script \"Bonjour le monde\""
  }

  // const { data, error: isError, isLoading } = useQuery(["id", input],
  //   () => axios.post(`${BACKEND_URL}/generator/generate`, input).then((res) => res.data),
  //   { retry: false }
  // );

  const output = {
    "code": "\n\npackage principal\nimport \"fmt\"\n\nfunc principal() {\n\tfmt.Println(\"Bonjour le monde!\")\n}\n\n// Sortie:\n// Bonjour le monde!"
  };

  return (
    <div></div>
  )
}

export default Lisa
