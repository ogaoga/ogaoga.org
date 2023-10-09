const FooterCopyright = () => (
  <div className="footer-copyright">
    <div className="text-base mb-4">
      © Copyright 2011 - 2023 <a href="https://ogaoga.org/">ogaoga.org</a>
    </div>
    <div>
      Powered with&nbsp;
      <span role="img" aria-label="Love">
        ♥
      </span>
      &nbsp; by{' '}
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
    </div>
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
