import React, { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_r9qhxpy",
        "template_vcy23fp",
        form.current,
        "vokDZ_2EC3M5g1460"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          console.log(error.text);
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
    document.querySelector(".name_input").value = "";
    document.querySelector(".email_input").value = "";
    document.querySelector(".message").value = "";
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={12} className="px-1">
                  <input
                    className="name_input"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    className="email_input"
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    className="message_area"
                    row={6}
                    name="message"
                    placeholder="Message"
                    required
                  />
                  <button type="submit" value="Send">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
