import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <></>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-8 pb-8">
        <HeroOneButton
          title={
            <>
              <span className="text-primary-500">
                <b>ogaoga.org</b>
              </span>
            </>
          }
          descriptions={['ogaoga.org is a domain for ogaoga.']}
          button={undefined}
        />
      </Section>
    </Background>
  );
};

export { Hero };
