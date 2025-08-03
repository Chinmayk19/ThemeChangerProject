import SidebarLayout from '../components/SidebarLayout';

const Contact = () => (
  <SidebarLayout>
    <div className="mb-4">
      <h1 className="display-6 fw-bold">Contact</h1>
      <p>If you have any inquiries, reach out through the following:</p>
      <ul className="list-unstyled">
        <li>
          <strong>Address:</strong> Satara,Maharashtra.
        </li>
        <li>
          <strong>Phone:</strong> +91 7507358772
        </li>
        <li>
          <strong>Email:</strong> ckulkarni198@gmail.com
        </li>
        <li>
          <strong>Website:</strong> 
        </li>
      </ul>
    </div>
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Send us a message</h5>
        <p className="card-text">(This form is dummy—no backend attached for simplicity.)</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="you@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled>
            Submit
          </button>
        </form>
      </div>
    </div>
  </SidebarLayout>
);

export default Contact;
