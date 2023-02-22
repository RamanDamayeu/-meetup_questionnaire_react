import { useState } from 'react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import awsExports from './aws-exports';
import { createQuestionnaire } from './graphql/mutations';
import { listPosts } from './graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });


function Questionnaire() {
  const [questionnaire, setQuestionnaire] = useState([
    { question: 'What was an average number of Data Sources * Data Products?', values: { classic: 0, mapreduce: 0, cloud: 0 } },
    { question: 'What was an average number of years a company is on market?', values: { classic: 0, mapreduce: 0, cloud: 0 } },
    { question: 'What was an average number of data pipelines per Data Engineer?', values: { classic: 0, mapreduce: 0, cloud: 0 } },
  ]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await API.graphql({
      query: createQuestionnaire,
      variables: {
        input: {
          product_source_classic: questionnaire[0].values['classic'],
          product_source_mapreduce: questionnaire[0].values['mapreduce'],
          product_source_cloud: questionnaire[0].values['cloud'],
          years_on_market_classic: questionnaire[1].values['classic'],
          years_on_market_mapreduce: questionnaire[1].values['mapreduce'],
          years_on_market_cloud: questionnaire[1].values['cloud'],
          pipelines_per_data_eng_classic: questionnaire[2].values['classic'],
          pipelines_per_data_eng_mapreduce: questionnaire[2].values['mapreduce'],
          pipelines_per_data_eng_cloud: questionnaire[2].values['cloud']
        }
      }
    });
    setSubmitted(true); // switch to "Thank you!" page
  };

  const handleChange = (e, questionIndex, era) => {
    setQuestionnaire((prev) => {
      const updatedQuestionnaire = [...prev];
      updatedQuestionnaire[questionIndex].values[era] = Number(e.target.value);
      return updatedQuestionnaire;
    });
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h2>Thank you!</h2>
          <p>Your form has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Classic on-prem Data Warehouse Era</th>
                    <th>HDFS/MapReduce Era</th>
                    <th>Cloud Era</th>
                  </tr>
                </thead>
                <tbody>
                  {questionnaire.map((q, questionIndex) => (
                    <tr key={q.question}>
                      <td>{q.question}</td>
                      <td>
                        <input type="number" step="0.1" value={q.values.classic} onChange={(e) => handleChange(e, questionIndex, 'classic')} />
                      </td>
                      <td>
                        <input type="number" step="0.1" value={q.values.mapreduce} onChange={(e) => handleChange(e, questionIndex, 'mapreduce')} />
                      </td>
                      <td>
                        <input type="number" step="0.1" value={q.values.cloud} onChange={(e) => handleChange(e, questionIndex, 'cloud')} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="submit">Submit</button>
            </form>
      )}
    </div>
  );
}

export default Questionnaire;