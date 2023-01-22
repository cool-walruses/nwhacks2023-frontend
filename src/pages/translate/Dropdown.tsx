import { css } from "@emotion/react"
import { programming_languages } from "../../const/languages"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const Dropdown: React.FC = () => {
    // const PL = Object.values(programming_languages);
    // for (var i = 0; i < PL.length; i++) {
    //     var option = document.createElement("option");
    //     console.log(option);
    //     document.getElementById("lang").innerHTML +=
    //     '<option id="' + PL[i] + '">' + PL[i] + '</option>';
    // }
  return (
    <div css={css`
        border-radius: 7px;
    `
    }>
        <FormControl required sx={
            {
                minWidth:200,
                m:1,
                borderRadius: 7,
                boxShadow: 1,
                color: 'white',
                fontFamily: 'Sofia Sans'}
        }>
            <InputLabel id="plang">Programming Language
            </InputLabel>
            <Select>
                <MenuItem value=""> <em>Pick a programming language...</em>
                </MenuItem>
                <MenuItem value ="Python">Python
                </MenuItem>
            </Select>

        </FormControl>

    </div>
  )
}

export default Dropdown
