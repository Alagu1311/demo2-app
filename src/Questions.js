import React from 'react'

function Questions() {
  return (
      <div>
          <textarea type="Text" cols={50} placeholder="Questions"
              rows={10}></textarea><br></br>
            <textarea type="Text" cols={50} placeholder="comments"
        rows={10}></textarea>
      <div>
        <button>Sumbit</button>
        </div>
    </div>
  )
}

export default Questions;