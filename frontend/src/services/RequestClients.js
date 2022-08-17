import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
export default fetchData;
export function useGetAllClients() {
  return useQuery('all-pcs', () =>
    fetchData(`http://127.0.0.1:8000/api/all-pcs`)
  );
}

export function usePostClients({ config }) {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ formData }) => {
      await axios.post(`http://127.0.0.1:8000/api/all-pcs`, formData);
    },
    {
      onSuccess: () => {
        //notification("PC geändert");
        // Invalidate and refetch
        queryClient.invalidateQueries('all-pcs');
        //wait for closing to display success
        config.onSuccess();
      },
      onError: () => {
        config.onError();
        console.log('error');
      },
    }
  );
}

export function usePatchClients({ config }) {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ pcId, formData }) => {
      await axios.patch(
        `http://127.0.0.1:8000/api/pc/${pcId}`,
        formData
      );
    },

    {
      onSuccess: () => {
        //notification("PC geändert");
        // Invalidate and refetch
        queryClient.invalidateQueries('all-pcs');
        //wait for closing to display success
        config.onSuccess();
      },
      onError: () => {
        config.onError();
        console.log('error');
      },
    }
  );
}
export function useDeleteClients({ config }) {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ pcId }) => {
      await axios.delete(`http://127.0.0.1:8000/api/pc/${pcId}`);
    },

    {
      onSuccess: () => {
        //notification("PC geändert");
        // Invalidate and refetch
        queryClient.invalidateQueries('all-pcs');
        //wait for closing to display success
        config.onSuccess();
      },
      onError: () => {
        config.onError();
        console.log('error');
      },
    }
  );
}
