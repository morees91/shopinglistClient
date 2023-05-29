import * as React from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import Text from '../Text';
import FormGroup from '../FormGroup';
import Button from '../button';
import Input from '../Input';
import { Collapse } from 'react-bootstrap';
import Column from '../Column';
import Row from '../Row';

interface Props {
    children: React.ReactNode,
    headerText: string,
    footerText:string
    successButton: any

    ResetButton: any,
    btnSuccessValue:string,


}

export default function Card({ children, headerText, ResetButton, successButton,btnSuccessValue,footerText }: Props) {


    return (
        <Column column='mx-auto p-4'>

            <div className='card'>

                <div className='card-header '>
                    <Text>{headerText}</Text>

                </div>

                <div className='card-body'>

                    {children}
                </div>
                <div className='card-footer'>
                <Row ClassName='text-end'>
                        <Column column='col-md'>
                            <Text>{footerText}</Text>
                        </Column>
                    </Row>
                    <Row ClassName=''>

                        <div className='col-md text start'>
                            <Button onclick={successButton} button='primary'>
                                {btnSuccessValue}
                            </Button>
                            <Input type='button' className='secondary' value='Reset' ResetClick={ResetButton} />
                        </div>

                    </Row>

                </div>
            </div>
        </Column>
    )
}