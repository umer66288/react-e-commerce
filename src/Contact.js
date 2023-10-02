import styled from "styled-components";

const Contact = () => {

  return <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13623.64765863059!2d73.05721719013829!3d31.388992255883426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d49afde6e87%3A0x59de94db4a123a7b!2sSamanabad%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694896056537!5m2!1sen!2s"
      width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form
          action="https://formspree.io/f/xoqollrn"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter you message"></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};
const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;
.container {
  margin-top: 6rem;
  .contact-form {
    max-width: 50rem;
    margin: auto;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;
export default Contact;