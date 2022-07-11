import { FormEventHandler } from "react"
import { useUploadFileMutation } from "../generated/graphql"

export const PageIndex = () => {
  const [uploadFileResult, uploadFile] = useUploadFileMutation()

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const file = formData.get("file") as File
    uploadFile({ file })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          file
          <input type="file" name="file" />
        </label>
        <button>ok</button>
      </form>
    </div>
  )
}
