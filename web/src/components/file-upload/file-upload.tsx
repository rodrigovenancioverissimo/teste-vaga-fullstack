/* eslint-disable @next/next/no-async-client-component */
import { graphql } from "@/gql";
import { FormEvent, useState } from "react";
import { FileInput } from "../file-input/file-input";
import parseFileToBase64 from "@/utils/parse-file-to-base-64";
import { useMutation } from "@apollo/client";

const importFromCsv = graphql(/* GraphQL */ `
  mutation ImportFromCsv($file: String!) {
    importFromCsv(file: $file)
  }
`);

export default function FileUpload() {
  const [file, setFile] = useState<File>();
  const [mutation] = useMutation(importFromCsv);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor seleciona um arquivo CSV");
      return;
    }

    try {
      console.log("Enviando");
      const str = await parseFileToBase64(file);
      await mutation({ variables: { file: str } });
      alert("Arquivo enviado com sucesso!");
    } catch (error) {
      console.error("Error uploading CSV:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FileInput onChange={setFile} />
        <button type='submit' className=''>
          Upload CSV
        </button>
      </form>
    </>
  );
}
