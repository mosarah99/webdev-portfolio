import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import * as uuid from 'uuid';
import ProjectDetailsModal from '../../components/Modal/ProjectDetails/ProjectDetailsModal.component';

// import { projectsList } from '../../assets/projectsList';

const LoadingPlaceholder = () => {
  return <Typography variant='h6'>Loading project details...</Typography>;
};
const NotFoundPlaceholder = () => {
  return <Typography variant='h6'>Project not found.</Typography>;
};

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<any>(null);
  const [modalOpen, _setModalOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      //   const res = await fetch(`/api/products/${projectId}`);
      //   const data = await res.json();

      const data = await import('../../assets/projectsList');
      const project = data.projects.find((project) => project.id === projectId);

      const skillsData = await import('../../assets/skills');

      const projectExtended = {
        ...project,
        skills: skillsData?.default
          .map((skill) => (project?.skillId.includes(skill.id) ? skill : null))
          .filter(Boolean),
      };

      setProject(projectExtended);
    };

    if (projectId) fetchProject();
  }, [projectId]);

  const onModalClose = () => {
    _setModalOpen(false);
    navigate(-1 || '/projects');
  };

  const renderProjectDetails = () => {
    switch (project) {
      case null:
        return <LoadingPlaceholder />;
      case undefined:
        return <NotFoundPlaceholder />;
      default:
        return (
          <ProjectDetailsModal
            project={project}
            onClose={onModalClose}
            open={modalOpen}
          />
        );
    }
  };

  return <Box>{renderProjectDetails()}</Box>;
};

export default ProjectDetails;
