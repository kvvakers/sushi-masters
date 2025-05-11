import { useRouter } from "vue-router";

export const withErrorHandling = (apiCall) => {
  const router = useRouter();
  return apiCall.catch((err) => {
    switch (err.response.status) {
      case 401:
        router.push({ name: 'account' });
        break;
      default:
        break;
    }
    console.log('API Error', err);
    throw err;
  });
};
