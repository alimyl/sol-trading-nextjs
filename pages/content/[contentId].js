import React, { useState, useEffect } from 'react'

// next - head
import Head from 'next/head'

// nextjs - router
import { useRouter } from 'next/router'

// content page
import Content from 'components/CommonComponents/Content'

function contentIdWrapper() {
    // consts
    const router = useRouter()

    // states
    const [currentPage, setCurrentPage] = useState("")
    const [pageContent, setPageContent] = useState("")

    // getting current product name & content
    useEffect(() => {
        const { contentId } = router.query

        if (contentId) {
            setCurrentPage(contentId)

            setPageContent("<p style='margin-bottom: 10px'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit esse laborum magni quasi quis sint a incidunt eum ea fugiat voluptatem temporibus obcaecati, reprehenderit adipisci, eaque consequatur! Molestiae, nesciunt modi.</p> <p style='font-weight: bold; margin-bottom: 10px'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit esse laborum magni quasi quis sint a incidunt eum ea fugiat voluptatem temporibus obcaecati, reprehenderit adipisci, eaque consequatur! Molestiae, nesciunt modi.</p> <p style='margin-bottom: 10px'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit esse laborum magni quasi quis sint a incidunt eum ea fugiat voluptatem temporibus obcaecati, reprehenderit adipisci, eaque consequatur! Molestiae, nesciunt modi.</p> <p style='font-weight: bold; margin-bottom: 10px'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit esse laborum magni quasi quis sint a incidunt eum ea fugiat voluptatem temporibus obcaecati, reprehenderit adipisci, eaque consequatur! Molestiae, nesciunt modi.</p>")
        }
    }, [router])

    return (
        <React.Fragment>
            {/* display name and icon in the title of the browser */}
            <Head>
                <title>Sol Trading | {currentPage}</title>
                <meta name="description" content="Sol Trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            {/* actual body of the page */}
            <Content
                currentPage={currentPage}
                pageContent={pageContent}
            />
        </React.Fragment>
    )
}


export default contentIdWrapper