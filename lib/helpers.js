import { loadDB } from './db'

// Possible values for signUpStatus are
// NOT_ATTEMPTED, IN_PROGRESS, SUCCEEDED, FAILED
export async function addEmail(email, setSignupStatus) {
  const db = await loadDB()
  db.firestore().collection('signups')
    .add({
      email: email,
      timestamp: db.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      setSignupStatus("SUCCEEDED")
    })
    .catch((error) => {
      console.error("Error adding document: ", error)
      setSignupStatus("FAILED")
    })
}
