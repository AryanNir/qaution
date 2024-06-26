import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <Navbar />
        <Services />
        {children}
        </>
    )
}

export default layout
