// import useSWR from "swr";
// export const API_BASE = "https://afrilearn-backend-01.herokuapp.com/api/v1";

// // export const API = {

// //   /* HTTP Headers Builder */
// //   headers: (headersField = [{ 'Content-Type': 'text/json' }]) => {
// //     const newHeader = new Headers()
// //     headersField.forEach((header) => newHeader.append(header))
// //     return newHeader
// //   },

// /* HTTP GET Request for first load and signup */
// const fetchData = async () => {
//   // const fetcher = (...args) => fetch(...args).then((res) => res.json());
//   // const { data, error } = useSWR(`${API_BASE}/courses`, fetcher);

//   const res = await fetch(`${API_BASE}/courses`);
//   const data = await res.json();
//   // data ? console.log(data) : console.log(error);

//   // return { props: { data } };
//   return {
//     data: data,
//   };
// };

// export default  async function  handler (req, res) {
//   let fecthdata = await fetchData();
//   res.status(200).json(fecthdata);
// }

// //   /* HTTP POST Request to signup */
// //   registerUser: async (newUserData) => {

// //     const responseObj = {}
// //     const signupEndpoint = `${API_BASE}/auth/signup`
// //     const promise = new Promise(async function (resolve, reject) {
// //       await fetch(signupEndpoint, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(newUserData),
// //       })
// //         .then((res) => {
// //           responseObj.ok = res.ok
// //           res.json().then((data) => {
// //             const registerResponse = {
// //               isError: !responseObj?.ok,
// //               registerUser: data?.status,
// //               fieldsErrors: data?.errors
// //             }
// //             resolve(registerResponse)
// //           })

// //         })
// //         .catch((err) => reject(err))
// //     })

// //     return promise
// //   },
// //   /* HTTP POST Request to login */
// //   loginDefault: async (userInfo) => {
// //     console.log("LOGIN", userInfo)
// //     const promise = new Promise(async (resolve, reject) => {
// //       await fetch(`${API_BASE}/auth/login`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         // credentials: 'include',
// //         // mode: 'no-cors',
// //         body: JSON.stringify(userInfo),
// //       }).then((res) => {
// //         res.json().then((data) => {
// //           const registerResponse = {
// //             error: data?.error,
// //             status: data?.status,
// //             fieldsErrors: data?.errors,
// //             user: data?.data?.user,
// //             token: data?.data?.token,
// //             isLoggedIn: (data?.status === 'success')
// //           }
// //           resolve(registerResponse)
// //         })
// //       })
// //         .catch((err) => reject(err))
// //     })
// //     return promise
// //   }

// // }
