import SidebarLayout from '../components/SidebarLayout';

const About = () => (
  <SidebarLayout>
    <div className="mb-4">
      <h1 className="display-6 fw-bold">About Us</h1>
      <p>
        ThemeApp is a sample React application built to showcase theme switching, responsive layouts,
        and fetching real data. Each theme modifies typography, colors, structure and spacing.
      </p>
    </div>
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">Our Mission</h5>
        <p className="card-text">
          Provide a clean, flexible, and maintainable UI foundation with dynamic theming and accessible
          design across devices.
        </p>
        <button className="btn btn-outline-primary">Learn More</button>
      </div>
    </div>
  </SidebarLayout>
);

export default About;
