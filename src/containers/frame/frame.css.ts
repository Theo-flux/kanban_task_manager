import styled from 'styled-components';
import { device } from '@/utils';

type TAsideProps = {
  showsidebar: boolean;
};

export const FrameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Aside = styled.div<TAsideProps>`
  width: 100%;

  @media ${device.md} {
    width: ${props => (props.showsidebar ? `70%` : `1000%`)};
  }

  @media ${device.lg} {
    width: ${props => (props.showsidebar ? `80%` : `100%`)};
  }

  @media ${device.xl} {
    width: ${props => (props.showsidebar ? `85%` : `100%`)};
  }

  @media ${device.xxl} {
    width: ${props => (props.showsidebar ? `90%` : `100%`)};
  }
`;
