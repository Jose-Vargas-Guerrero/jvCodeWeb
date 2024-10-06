import "./form.css";

function Form() {
  return (
    <div className="contactForm">
      <form>
          <input
            className="email"
            type="email"
            placeholder="correo"
            name="email"
            required
          />
        <input
          className="nombre"
          type="text"
          placeholder="nombre"
          name="nombre"
          required
        />
        <textarea
          className="mensaje"
          placeholder="mensaje"
          name="mensaje"
          required
        />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default Form;
