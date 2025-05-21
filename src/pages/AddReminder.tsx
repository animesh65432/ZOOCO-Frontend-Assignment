import React from 'react';
import { motion } from 'framer-motion';
import { AddRemider } from "../components"

const AddReminderPage: React.FC = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <AddRemider />
        </motion.div>
    );
};

export default AddReminderPage
