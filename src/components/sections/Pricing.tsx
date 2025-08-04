'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { pricingPlans } from '@/lib/data'
import PricingCard from '../PricingCard'

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 mb-6"
          >
            💰 Transparent Pricing
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Choose the Perfect{' '}
            <span className="gradient-text">Plan for Your Business</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Start with our free trial and scale as you grow. All plans include our core AI features 
            with no hidden fees or setup costs.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              notIncluded={plan.notIncluded}
              popular={plan.popular}
              cta={plan.cta}
              color={plan.color}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              All Plans Include
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Enterprise Security
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Bank-level encryption and SOC 2 compliance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Advanced Analytics
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Real-time insights and performance tracking
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  AI Optimization
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Machine learning-powered campaign optimization
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Need a custom solution? Contact our sales team for enterprise pricing.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-600 text-primary-600 font-medium hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 