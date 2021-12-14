import React from 'react';
import { BaseTypeProps } from '../utils';

export interface CardProps extends BaseTypeProps {
  /** 圆角卡片 */
  round?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardHeaderProps extends BaseTypeProps {
  /** 头部额外内容 */
  extra?: React.ReactNode;
  children?: React.ReactNode;
  /** 显示下边框 */
  border?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardBodyProps extends BaseTypeProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardFooterProps extends BaseTypeProps {
  children?: React.ReactNode;
  /** 显示上边框 */
  border?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardCoverProps extends BaseTypeProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}
