// Libraries
import React, { useState } from 'react';

// Components
import Layout from 'antd/lib/layout';


export interface SidebarProps {
	collapsed: boolean
}

export default function Sidebar (props: SidebarProps) {
		return (
			<Layout.Sider trigger={null} collapsible collapsed={props.collapsed}>
				Sider
			</Layout.Sider>
		);
};
