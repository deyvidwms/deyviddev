import React, { useEffect } from 'react';

const Projects: React.FC = () => {
  const [loading, setLoading] = React.useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        py-20 container mx-auto px-5
        md:py-40
      "
      id="projects"
    >
      {/* TODO: transformar isso em um componente */}
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-blue-500">{"< "}</span> 
        Projects
        <span className="text-blue-500">{" />"}</span>
      </h2>

      <div className='text-center mt-4'>
        <h1 className='text-6xl font-bold'>Coming soon {loading}</h1>
      </div>
    </div>
  );
}

export default Projects;