export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
            </tr>
            <br></br>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Groups</label>
            </td>
            <td>
                <select id="wd-group">
                    <option selected value="ASSIGNMENTS">
                    ASSIGNMENTS</option>
                </select>
            </td>
            </tr>
            <br></br>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option selected value="percentage">
                    Percentage</option>
                </select>
            </td>
            </tr>
            <br></br>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option selected value="online">
                    Online</option>
                </select>
            </td>
            </tr>
            <br></br>
            <tr>
            <td align="right" valign="top">
                <label>Online Entry Options</label><br/>

                <input type="checkbox" name="online-entry-options" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="online-entry-options" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="online-entry-options" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="online-entry-options" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>

                <input type="checkbox" name="online-entry-options" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Upload</label>

            </td>
            </tr>
            <br></br>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
            </tr>
            <br></br>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" value="05/13/2024" id="wd-due-date"/>
            </td>
          </tr>
          <br></br>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="date" value="05/13/2024" id="wd-available-from"/>
            </td>
            <td align="right" valign="top">
              <input type="date" value="05/20/2024" id="wd-available-until"/>
            </td>
          </tr>
          <tr>
          </tr>
          <tr>
            
            <td align="right" valign="top"></td>
            <td align="right" valign="top">
                <button id="wd-save-assignment">Cancel</button>
                <button id="wd-cancel-assignment">Save</button>
            </td>
          </tr>
          </table> 
       
      </div>
  );}
  