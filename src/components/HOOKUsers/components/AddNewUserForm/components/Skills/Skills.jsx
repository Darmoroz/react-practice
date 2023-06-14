import { useState } from 'react';

const skillsMap = [
  { id: 'react', title: 'React' },
  { id: 'vue', title: 'Vue' },
  { id: 'angular', title: 'Angular' },
];

const defaultValue = {
  react: false,
  vue: false,
  angular: false,
};

const Skills = () => {
  const [state, setState] = useState(defaultValue);

  const hadleChange = e => {
    setState({ ...defaultValue, [e.target.value]: true });
  };
  return (
    <fieldset className="mt-3">
      <legend className="h6">Skills:</legend>

      <div className="d-flex">
        {skillsMap.map(skill => (
          <div key={skill.id} className="form-check me-5">
            <label className="form-check-label">
              <span>{skill.title}</span>
              <input
                type="radio"
                name="skills"
                value={skill.id}
                checked={state[skill.id]}
                onChange={hadleChange}
                className="form-check-input"
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Skills;
