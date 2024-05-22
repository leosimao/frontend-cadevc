import testImg from '@/assets/imgs/girt-sitting-next-to-dog.webp'
import { Paw } from '@/components/paw'
import { Button } from '@/components/ui/button'
import { ImageWithLoader } from '@/components/ui/image-with-loader'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const PetSubscriptionDonePage = () => {
  return (
    <div className="container flex flex-col-reverse justify-between pb-7 pt-4 lg:flex-row lg:px-20 lg:pb-36 lg:pt-24">
      <div className="w-full space-y-9 lg:w-1/2">
        <h1 className="md mb-6 text-center text-2xl font-semibold leading-tight lg:max-w-96 lg:text-left lg:text-5xl ">
          <span className="text-primary">Cadastro Concluído com Sucesso!</span>
        </h1>
        <div className="w-full space-y-8 lg:w-5/6 ">
          <p className="text-center lg:text-left">
            Faça a Diferença: Compartilhe Nossa Plataforma e Ajude Mais Famílias
            a Reunirem-se com Seus Pets Desaparecidos!
          </p>
          <div className="h-[1.5px] w-full bg-[#EFCFFE]" />
          <div className="flex flex-col gap-4 lg:max-w-[19rem]">
            <p className="text-center lg:text-left">
              Deseja cadastrar mais pets?
            </p>
            <Button
              asChild
              className="h-auto w-full items-center gap-2 rounded-lg border-primary px-4 py-3 text-base leading-none text-primary hover:bg-primary hover:text-white lg:w-3/5 "
              variant="outline"
            >
              <Link to="/cadastrar-pet">
                Cadastrar mais
                <ChevronRight className="size-4" strokeWidth={3} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <ImageWithLoader
          src={testImg}
          alt="Jovem mulher sentada próxima a um cachorro tirando uma foto"
        />
      </div>

      <section className="bg-primary-500 py-10 text-white lg:py-20">
        <div className="container">
          <Paw className="mx-auto mb-2.5 size-10 lg:mb-11 lg:h-[68px] lg:w-[72px]" />

          <h2 className="mb-6 text-balance text-center text-2xl font-bold lg:mb-11 lg:text-5xl">
            Você fez a diferença!
          </h2>

          <p className="text-balance text-center lg:text-xl">
            Não contavam com sua AUstúcia! Você registrou um pet perdido e
            trouxe esperança! O mundo precisa de mais pessoas como você. Se você
            tem mais pets perdidos, não hesite em cadastrar e continue fazendo a
            diferença.
          </p>
        </div>
      </section>
    </div>
  )
}
