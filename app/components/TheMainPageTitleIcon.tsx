function TheMainPageTitleIcon({ href, image, description }: any) {
  return (
    <div className="flex gap-5 items-center">
      <a href={href} className="min-w-39 max-w-39 sm:min-w-50 sm:max-w-50">
        <img src={image.src} alt={image.alt} className="mx-auto rounded-4xl" />
      </a>
      <div className="text-md sm:text-xl w-max">{description}</div>
    </div>
  );
}

export { TheMainPageTitleIcon };
