import NotionRenderer from '@/components/Post/NotionRenderer'

const IntroHero = ({ blockMap }) => {
  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:w-4/5 md:items-start mb-6 md:mb-0 md:text-left'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
        </div>
      </div>
    </>
  )
}

export default IntroHero
