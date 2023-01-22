import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../const/urls";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import Message from "./translate/Message";
import { PROGRAM_LANG } from "../const/languages";

const Lisa: React.FC = () => {
  const input = {
    "programming_language" : PROGRAM_LANG.GO,
    "prompt" : "Écrire un script \"Bonjour le monde\""
  }

  // const { data, error: isError, isLoading } = useQuery(["id", input],
  //   () => axios.post(`${BACKEND_URL}/generator/generate`, input).then((res) => res.data.code),
  //   { retry: false }
  // );

  const output = "def insertion_sort(A):\n  \"\"\"\n  Insertion sort\n  1. Loop through all the elements of the array\n  2. If the current element is less than the previous element,\n  then move it to the left until it is in the correct position\n  \"\"\"\n  for i in range(1, len(A)):\n    j = i\n    while j > 0 and A[j-1] > A[j]:\n      A[j], A[j-1] = A[j-1], A[j]\n      j -= 1\n  return A\n\nif __name__ == \"__main__\":\n  A = [5,2,4,6,1,3]\n  print(insertion_sort(A))";

  return (<>
    <Message
      origin="ai"
    >
      Hey there! I'm DN!
    </Message>

    <Message
      origin="user"
      language={PROGRAM_LANG.PYTHON}
    >
      Can I get... uhhh... beesechurger?
    </Message>


    <Message
      code={{text: output, language: PROGRAM_LANG.PYTHON}}
    />
  </>)
}

export default Lisa
