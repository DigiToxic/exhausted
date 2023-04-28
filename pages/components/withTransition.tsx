import { useRouter } from 'next/router';
import { useEffect, useState, ComponentType, PropsWithChildren } from 'react';

const withTransition = <P,>(WrappedComponent: ComponentType<P>) => {
  const WithTransition: React.FC<PropsWithChildren<P>> = (props: PropsWithChildren<P>) => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      const handleRouteChange = () => {
        setIsMounted(false);
      };

      router.events.on('routeChangeStart', handleRouteChange);
      router.events.on('routeChangeComplete', () => {
        setIsMounted(true);
      });
      router.events.on('routeChangeError', () => {
        setIsMounted(true);
      });

      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
        router.events.off('routeChangeComplete', () => {
          setIsMounted(true);
        });
        router.events.off('routeChangeError', () => {
          setIsMounted(true);
        });
      };
    }, [router.events]);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const pageTransitionClass = isMounted ? '' : 'fade-out';

    return (
      <div className={`page ${pageTransitionClass}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithTransition;
};

export default withTransition;
