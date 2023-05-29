import * as React from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import Text from '../Text';
import FormGroup from '../FormGroup';
import Button from '../button';
import Input from '../Input';

interface Props {
    children: React.ReactNode,
    headerText: string


}

export default function Card2({ children, headerText}: Props) {


    return (
        <div className='col-md  mx-auto p-4'>

            <div className='card'>

                <div className='card-header'>
                    <Text>{headerText}</Text>

                </div>

                <div className='card-body overflow-auto'>
                    
                    {children}
                </div>
           
            </div>
        </div>
    )
}