import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Collapse from '../../components/Collapse';
import { getClientValidator } from '../../services/RequestClients';
import Client, { Video } from '../../services/types';
import MuiTable from './MuiTable';

interface Props {
  allClients: Client[];
  allVideos: Video[];
}
const Clients: React.FC<Props> = ({ allClients, allVideos }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col w-full gap-5 lg:w-1/2">
        <Link
          to={'/NewClient'}
          state={{ allVideos: allVideos }}
          className="btn btn-primary self-center w-full"
        >
          Client erstellen
        </Link>

        <MuiTable allVideos={allVideos} allClients={allClients} />
      </div>
    </>
  );
};
export default Clients;
