/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Access',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Seamless access to all your data, where it lives. No centralization required.
      </>
    ),
  },
  {
    title: 'Investigate',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Control plane accelerates your investigations and enables high-confidence outcomes.
      </>
    ),
  },
  {
    title: 'Respond',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Fast response actions—easily initiated directly from your browser.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
