import { AnimationUp } from 'components/AnimationUp';
import { Card } from 'components/Card';
import { Header } from 'components/Header';
import React from 'react';
import { Cards } from './styles';


export function Dashboard() {
  return (
    <>
      <Header />
      <Cards>
        <AnimationUp delay="300ms">
          {[1, 2, 3, 4].map(item => (
            <Card />
          ))}
        </AnimationUp>
      </Cards>
    </>
  );
}