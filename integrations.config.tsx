const integrations = {
  isOpenAIEnabled: false,
  isAlgoliaEnabled: false,
  isMailchimpEnabled: false,
  isAuthEnabled: false,
  isI18nEnabled: false,
};

const messages = {
  openai: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      OpenAI is not enabled. Follow the{' '}
      <a
        href='https://docs.saasbold.com/integrations/enable-or-disable-integrations'
        className='text-primary underline'
      >
        documentation
      </a>{' '}
      to enable it.
    </div>
  ),
  algolia: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Algolia is not enabled. Follow the{' '}
      <a
        href='https://docs.saasbold.com/integrations/enable-or-disable-integrations'
        className='text-primary underline'
      >
        documentation
      </a>{' '}
      to enable it.
    </div>
  ),
  mailchimp: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Mailchimp is not enabled. Follow the {''}
      <a
        href='https://docs.saasbold.com/integrations/enable-or-disable-integrations'
        className='text-primary underline'
      >
        documentation
      </a>{' '}
      to enable it.
    </div>
  ),
  auth: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Auth is not enabled. Follow the{' '}
      <a
        href='https://docs.saasbold.com/integrations/enable-or-disable-integrations'
        className='text-primary underline'
      >
        documentation
      </a>{' '}
      to enable it.
    </div>
  ),
  s3: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      S3 is not enabled. Follow the{' '}
      <a
        href='https://docs.saasbold.com/integrations/enable-or-disable-integrations'
        className='text-primary underline'
        target='_blank'
        rel='noopener noreferrer'
      >
        documentation
      </a>{' '}
      to enable it.
    </div>
  ),
};

export { integrations, messages };
