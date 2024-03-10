/* eslint-disable @next/next/no-async-client-component */
import { graphql } from "@/gql";
import { FormEvent, useState } from "react";
import FileInput from "../file-input/file-input";
import parseFileToBase64 from "@/utils/parse-file-to-base-64";
import { useMutation } from "@apollo/client";
import Button from "../button/button";

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
      <form
        onSubmit={handleSubmit}
        className='flex flex-row flex-wrap p-4 bg-green-800 gap-4'
      >
        <FileInput onChange={setFile} />
        <Button type='submit' className='py-5 px-8'>
          Enviar
        </Button>
      </form>
    </>
  );
}
