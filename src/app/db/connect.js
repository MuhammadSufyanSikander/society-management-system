import mongoose from 'mongoose'

export const connect = async () => {
  // mongodb://atlas-sql-64cfa78fe47d760e9a18b75e-giqdn.a.query.mongodb.net/test?ssl=true&authSource=admin
  try {
    const connectionString = `mongodb+srv://ZaidAli:8ZfOFMVIxwK4bAKn@cluster0.kkgmccv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    const res = await mongoose.connect(connectionString)

    return res
  } catch (error) {
    console.log('error connecting to Mongo : ', error)
    throw new Error('Error connecting to Database')
  }
}
