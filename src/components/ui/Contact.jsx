'use client';

import { useForm } from 'react-hook-form';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
const DOODLE_RAM = '/kyy-portfolio/assets/characters/doodle-ram.png';

import 'aos/dist/aos.css';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const form = useForm({
    defaultValues: {
      nama_lengkap: '',
      email: '',
      pesan: '',
    },
  });

  function onSubmit(values) {
    const subject = `Pesan dari ${values.nama_lengkap}`;
    const body = `Nama: ${values.nama_lengkap}%0D%0AEmail: ${values.email}%0D%0A%0D%0APesan:%0D%0A${values.pesan}`;

    window.open(
      `mailto:dickyramadhan3110@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${body}`,
      '_blank'
    );
  }

  return (
    <>
      <div className='bg-[#eeeacb] py-12 px-6 border-b-4 text-center'>
        <h2
          data-aos='fade-up'
          data-aos-duration='1000'
          className='text-4xl font-bold font-drinks-fruit text-[#EA97CA] mb-8 text-stroke-neu lg:text-5xl'
        >
          Contact Me
        </h2>

        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='neu relative bg-[#4D9E95] w-[80%] mx-auto px-10 py-7 rounded-sm'
        >
          <img
            className='absolute left-[-65px] bottom-[-50px] z-[99] w-[160px] sm:w-[205px] sm:left-[-90px] md:w-[245px] md:left-[-150px] pointer-events-none select-none'
            src={DOODLE_RAM}
            alt='Doodle Ram'
            draggable={false}
          />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='nama_lengkap'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-[#FFFFFF] font-gothicexpanded'>
                      Nama Lengkap
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Masukkan nama lengkap'
                        autoComplete='off'
                        className='font-caveat-brush text-lg'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-[#FFFFFF] font-gothicexpanded'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='email@example.com'
                        autoComplete='off'
                        className='font-caveat-brush text-lg'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='pesan'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-[#FFFFFF] font-gothicexpanded'>
                      Pesan
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder='Tulis pesanmu...'
                        autoComplete='off'
                        className='font-caveat-brush text-lg'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type='submit'
                className='bg-[#ffffff] hover:bg-[#EA97CA] text-[#000000] font-gothicexpanded px-5 py-2 rounded-md neu neu-active'
              >
                Kirim
              </button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
