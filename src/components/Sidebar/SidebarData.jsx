import React from 'react'
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import SubjectIcon from '@mui/icons-material/Subject';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const SidebarData = [
    {
      title: 'Training Management',
      path: '/training',
      icon: <ModelTrainingIcon />,
      iconClosed: <ArrowDropDownIcon />,
      iconOpened: <ArrowDropUpIcon />,
     
      subNav: [
        {
          title: 'Users',
          path: '/overview/users',
          icon: <PeopleAltIcon />
        },
        {
          title: 'Revenue',
          path: '/overview/revenue',
          icon: <PeopleAltIcon />
        }
      ]
    },
    {
      title: 'Curriculum Management',
      path: '/curriculum',
      icon: <SubjectIcon />,
      iconClosed: <ArrowDropDownIcon />,
      iconOpened: <ArrowDropUpIcon />,
  
      subNav: [
        {
          title: 'Reports',
          path: '/reports/reports1',
          icon: <PeopleAltIcon />,
          cName: 'sub-nav'
        },
        {
          title: 'Reports 2',
          path: '/reports/reports2',
          icon: <PeopleAltIcon />,
          cName: 'sub-nav'
        },
        {
          title: 'Reports 3',
          path: '/reports/reports3',
          icon: <PeopleAltIcon />
        }
      ]
    },
    {
      title: 'User Management',
      path: '/users',
      icon: <PeopleAltIcon />
    },
    {
      title: 'Report',
      path: '/report',
      icon: <SummarizeIcon />
    }
  ];

export default SidebarData