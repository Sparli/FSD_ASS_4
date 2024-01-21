const Contact = () => {
    return (
      <div className='formbody'>
<form id="submissionForm" onsubmit="validateForm(event)">
<h2>Send me a message</h2>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

 

  <label for="organization">Organization:</label>
  <input type="text" id="organization" name="organization" />

  <label for="comments">Comments:</label>
  <textarea id="comments" name="comments" rows="4"></textarea>

  <label for="subscribe" className="d-flex ">
    <input type="checkbox" id="subscribe" name="subscribe" /> Subscribe 
  </label>

  <button type="submit">Submit</button>
</form>
</div>
    )
}
export default Contact;