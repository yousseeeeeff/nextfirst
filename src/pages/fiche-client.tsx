import {
  Accordion,
  Badge,
  Breadcrumb,
  Button,
  CardProfile,
  Container,
  Icon,
  Image,
  Popup,
  Progress,
  Rating,
  Table,
  Text,
  TitleWithIcon,
} from 'rma-ui';
import { createColumnHelper } from '@tanstack/react-table';
import { NextPage } from 'next';
import React from 'react';


const Page: NextPage = () => {
  return (
    <>
      <Container layout='fluid' className='space-y-4 py-4'>
        <Breadcrumb
          homeUrl='/'
          pages={[
            {
              name: 'Fiche client',
              id: '1',
              href: '/fiche-client',
              current: true,
            },
          ]}
        />
        <Text variant='text-xl/Semibold' className='text-primary-700'>
          Fiche client
        </Text>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='basis-1/3 space-y-4'>
            <InfoClient />
            <ActesEnInstance />
          </div>
          <div className='grow basis-2/3 space-y-4'>
            <ProfileClient />
            <TableView />
            <Annotations />
          </div>
        </div>
      </Container>
      <Popup />
    </>
  );
};

export default Page;

const ProfileClient: React.FC = () => {
  return (
    <div className='col-span-full max-h-fit space-y-4 rounded-lg bg-white p-4 shadow lg:col-span-2 lg:col-start-2'>
      <TitleWithIcon
        appendIcon={true}
        iconId='user-square'
        variant='text-lg/Semibold'
        className='text-primary-700'
      >
        Profil du client
      </TitleWithIcon>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        <CardProfile
          title={<p>Prime totale des contrats en cours</p>}
          subtitle='derniers 12 mois'
          number='23 049 DH'
        />
        <CardProfile
          title={<p>Prime totale des contrats en cours</p>}
          //subtitle="derniers 12 mois"
          number='23 049 DH'
        />
        <CardProfile
          title={<p>Prime totale des contrats en cours</p>}
          subtitle='derniers 12 mois'
          number='5'
        />
        <CardProfile
          title={<p>Prime totale des contrats en cours</p>}
          subtitle='derniers 12 mois'
          number='23 049 DH'
        />
        <CardProfile
          title={<p>Prime totale des contrats en cours</p>}
          subtitle='derniers 12 mois'
          number='10'
        />
        <CardProfile
          title={<p>Prime totale des contrats en cours</p>}
          subtitle='derniers 12 mois'
          badge={<Button variant='secondary'>Modérée</Button>}
        />
      </div>
    </div>
  );
};

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('name' as any, {
    header: 'Nom complet/ RS',
    id: 'Nom complet/ RS',
  }),
  columnHelper.accessor('cin' as any, {
    header: 'CIN',
    id: 'CIN',
  }),
  columnHelper.accessor('declaration_number' as any, {
    header: 'Declaration Number',
    id: 'Declaration Number',
  }),
  columnHelper.accessor('declaration_date' as any, {
    header: 'Declaration Date',
    id: 'Declaration Date',
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('type' as any, {
    header: 'Type',
    id: 'Type',
    enableSorting: false,
    filterFn: (row, id, filterValue) => filterValue.includes(row.getValue(id)),
  }),
  columnHelper.accessor((row: any) => row.status.value, {
    header: 'Status',
    id: 'Status',
    filterFn: (row, id, filterValue) => filterValue.includes(row.getValue(id)),
    cell: ({ row }: { row: any }) => row.original.status.element,
  }),
];

const tableData = [
  {
    name: 'fohn Doe',
    declaration_number: '146876',
    cin: 'AB5789',
    declaration_date: '10/12/2020',
    type: 'TVA',
    status: {
      element: <Badge label='En ligne' variant='success' />,
      value: 'En ligne',
    },
  },
  {
    name: 'fohn Doe',
    declaration_number: '146876',
    cin: 'TET9798',
    declaration_date: '10/12/2020',
    type: 'TVA',
    status: {
      element: <Badge label='Agent' variant='primary' />,
      value: 'Agent',
    },
  },
  {
    name: 'hohn Doe',
    declaration_number: '246876',
    cin: 'AB5789',
    declaration_date: '12/12/2020',
    type: 'RMA',
    status: {
      element: <Badge label='CRC' />,
      value: 'CRC',
    },
  },
  {
    name: 'John Doe',
    declaration_number: '346876',
    cin: 'AB5789',
    declaration_date: '10/11/2020',
    type: 'RMA',
    status: {
      element: <Badge label='CRC' />,
      value: 'CRC',
    },
  },
];

const options = {
  Status: [
    {
      element: <Badge label='En ligne' variant='success' className='w-max' />,
      value: 'En ligne',
    },
    {
      element: <Badge variant='primary' label='Agent' />,
      value: 'Agent',
    },
    {
      element: <Badge label='CRC' className='w-max' />,
      value: 'CRC',
    },
  ],
  Type: [
    {
      label: 'TVA',
      value: 'TVA',
    },
    {
      label: 'RMA',
      value: 'RMA',
    },
  ],
};

const TableView: React.FC = () => {
  return (
    <div className='col-span-full rounded-lg bg-white shadow lg:col-span-2 lg:col-start-2'>
      <TitleWithIcon
        appendIcon={true}
        iconId='directbox-notif'
        variant='text-lg/Semibold'
        className='text-primary-700 border-b border-gray-200 p-4'
      >
        Historique des contrats
      </TitleWithIcon>
      <Table
        selectRows={false}
        options={options}
        data={tableData}
        columns={columns as any}
        facetedFilterBy='Status,Type'
        searchBy='CIN'
        selectMultipleRows={false}
      />
    </div>
  );
};

const InfoClient = () => {
  return (
    <div className='col-span-1 row-start-1 divide-y divide-gray-200 rounded-lg bg-white shadow'>
      <div className='space-y-4 p-4'>
        <div className='flex justify-between'>
          <TitleWithIcon
            appendIcon={true}
            iconId='personalcard'
            variant='text-lg/Semibold'
            className='text-primary-700 flex-1'
          >
            Informations client
          </TitleWithIcon>
          <Button variant='secondary' className='p-2'>
            <Icon id='edit-2' className='h-4 w-4' />
          </Button>
        </div>
        <Text variant='text-lg/Medium' className='text-primary-500'>
          Amine Benjelloun
        </Text>
        <Progress
          label='Complétude de donées'
          percentage={75}
          variant='success'
        />
      </div>
      <div className='flex flex-wrap gap-8 px-4 py-6'>
        {badgeData.map((badge, index) => (
          <div key={index} className='flex w-max grow items-center gap-1'>
            <Image
              src={badge.image}
              alt={badge.label}
              width={24}
              height={24}
              className='h-6 w-6'
              unoptimized
            />
            <Text variant='text-base/Semibold' className='text-primary-700'>
              {badge.label}
            </Text>
          </div>
        ))}
      </div>
      <Info />
    </div>
  );
};

const badgeData = [
  {
    label: 'Client',
    image: '/images/Recomanded.png',
  },
  {
    label: 'VIP',
    image: '/images/Recomanded-1.png',
  },
  {
    label: 'Particulier',
    image: '/images/Recomanded-2.png',
  },
  {
    label: 'Senior',
    image: '/images/Recomanded-3.png',
  },
  {
    label: 'VIP',
    image: '/images/Recomanded-1.png',
  },
  {
    label: 'Client',
    image: '/images/Recomanded.png',
  },
];

const Info = () => {
  return (
    <div className='space-y-4 p-4'>
      <Text variant='text-lg/Medium' className='text-primary-700'>
        0630 645 736
      </Text>
      <TitleWithIcon
        variant='text-base/Medium'
        iconId='message'
        appendIcon
        className='text-gray-600'
      >
        abenjelloun@gmail.com
      </TitleWithIcon>
      <TitleWithIcon
        variant='text-base/Medium'
        iconId='location'
        appendIcon
        className='text-gray-600'
      >
        158, Rue Les Oliviers, Etg 5. Beausejour. Casablanca
      </TitleWithIcon>
      <TitleWithIcon
        variant='text-base/Medium'
        iconId='briefcase'
        appendIcon
        className='text-gray-600'
      >
        Beauséjour
      </TitleWithIcon>
      <TitleWithIcon
        variant='text-base/Medium'
        iconId='shield-tick'
        appendIcon
        className='text-gray-600'
      >
        36 ans • Marié • 2 enfants
      </TitleWithIcon>
      <Button variant='text' iconRight='plus' className='w-full justify-center'>
        Afficher plus d’informations
      </Button>
      <div className='flex gap-4'>
        <Button className='flex-1 justify-center'>
          Souscrire à une affaire
        </Button>
        <Button className='flex-1 justify-center' variant='secondary'>
          Déclarer un sinistre
        </Button>
      </div>
    </div>
  );
};

const ActesEnInstance = () => {
  return (
    <div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
      <TitleWithIcon
        appendIcon
        iconId='refresh'
        variant='text-lg/Semibold'
        className='text-primary-700 p-4'
      >
        Actes en instance
      </TitleWithIcon>
      <div className='py-4'>
        <Accordion
          items={[
            {
              id: '1',
              title: 'Devis (2)',
              caption: 'Devis en attente d’approbation du client',
              open: true,
              content: (
                <CardFicheClient
                  infos={[
                    {
                      label: 'Produit',
                      value: 'Auto',
                    },
                    {
                      label: 'N° du devis',
                      value: '1234567',
                    },
                    {
                      label: "Date d'effet",
                      value: '27/03/2023',
                    },
                    {
                      label: "Date d'échéance",
                      value: '27/03/2024',
                    },
                    {
                      label: 'Prime',
                      value: '7500 MAD',
                    },
                    {
                      label: 'Formule',
                      value: 'RC',
                    },
                  ]}
                />
              ),
            },
            {
              id: '2',
              title: 'Production (6)',
              caption: 'Affaire nouvelle non-déléguée en instance',
              content: (
                <CardFicheClient
                  infos={[
                    {
                      label: 'Produit',
                      value: 'Auto',
                    },
                    {
                      label: 'N° du devis',
                      value: '1234567',
                    },
                    {
                      label: "Date d'effet",
                      value: '27/03/2023',
                    },
                    {
                      label: "Date d'échéance",
                      value: '27/03/2024',
                    },
                    {
                      label: 'Prime',
                      value: '7500 MAD',
                    },
                    {
                      label: 'Formule',
                      value: 'RC',
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

const Annotations = () => {
  return (
    <div className='rounded-lg bg-white shadow'>
      <TitleWithIcon
        appendIcon
        iconId='like-tag'
        variant='text-lg/Semibold'
        className='text-primary-700 border-b border-gray-200 p-4'
      >
        Annotations
      </TitleWithIcon>
      <Ratings />
      <FeedBack />
    </div>
  );
};

const Ratings = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex gap-6'>
        <Rating initialValue={2.5} label='Recouvrement' />
        <Rating initialValue={2.5} label='Sinistralité' />
      </div>
      <Icon id='arrow-down' className='text-gold-500 h-6 w-6' />
    </div>
  );
};

const FeedBack = () => {
  return (
    <div className='p-4'>
      <div className='bg-primary-25 space-y-4 p-4'>
        <div className='flex justify-between'>
          <Text variant='text-base/Semibold' className='text-primary-500'>
            Assia soufiani{' '}
            <Text as='span' className='text-gray-600'>
              INT 4889
            </Text>
          </Text>
          <Text className='text-gray-600'>11/12/2023 à 16:22</Text>
        </div>
        <Text className='text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
    </div>
  );
};

type CardInfoType = {
  infos: {
    label: string;
    value: string;
  }[];
};

const CardFicheClient: React.FC<CardInfoType> = ({ infos = [] }) => {
  return (
    <div className='space-y-4 rounded-md border border-gray-200 bg-white p-4'>
      <Icon id='car' className='text-primary-500 h-6 w-6' />
      {infos.map((info, index) => (
        <dl key={index} className='flex justify-between'>
          <Text as='dt' className='text-gray-500'>
            {info.label}
          </Text>
          <Text as='dd' className='text-primary-500'>
            {info.value}
          </Text>
        </dl>
      ))}
      <Button iconRight='arrow-right'>Poursuivre</Button>
    </div>
  );
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
