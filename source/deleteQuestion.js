import deleteRequest from './internal/deleteRequest'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Deletes Question from Survey
 * @param {String} survey the name of the Survey
 * @param {String} question questionid for the one you want to delete
 * @return {Promise} A promise that resolves to deleting a question: https://api.qualtrics.com/reference#delete-question
*/

export default async function deleteQuestion(survey, question) {
    const id = await (getSurveyIds(survey));
    return deleteRequest(`${qualtricsDomain}survey-definitions/${id}/questions/${question}`);
}
