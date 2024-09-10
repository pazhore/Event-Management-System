import { FC } from 'react';
import { useForm } from '@mantine/form';
import { Button, Checkbox, Select, Textarea, TextInput } from '@mantine/core';
import Header from '../Header/header';
import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { DateInput } from '@mantine/dates';

interface EventFormProps {

}

const EventForm: FC<EventFormProps> = (props: Partial<DropzoneProps>) => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            title: '',
            discription: '',
            date: "",
            statuss: "",
            files:"",
            termsOfService: false,
        },

        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
        <>
            <Header title={'Event form'} subtitle={'add event by filling the form'} />
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput w={"50%"}
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <TextInput w={"50%"}
                    withAsterisk
                    label="Title"
                    placeholder="enter title of event"
                    key={form.key('title')}
                    {...form.getInputProps('title')}
                />
                <Textarea w={"50%"}
                    withAsterisk
                    label="Discription"
                    placeholder="enter discription"
                    key={form.key('discription')}
                    {...form.getInputProps('discription')}
                />
                <DateInput w={"30%"}
                    withAsterisk
                    label="Date input"
                    placeholder="Date input"
                    key={form.key('date')}
                    {...form.getInputProps('date')}
                />
                <Select w={"30%"}
                    label="status"
                    placeholder="select"
                    data={['Comming soon', 'Running', 'Ended']}
                />
                <Dropzone
                    onDrop={(files) =>form.setFieldValue('image',files[0])}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    {...props}
                  
                    {...form.getInputProps('image')}
                >
                    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>
                        <div>
                            <Text size="xl" inline>
                                Drag images here or click to select files
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={7}>
                                Attach as many files as you like, each file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    key={form.key('termsOfService')}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </>
    );
};

export default EventForm;