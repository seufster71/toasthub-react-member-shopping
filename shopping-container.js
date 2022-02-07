/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
// import * as actions from '../../core/common/apppref-actions';
import fuLogger from '../../core/common/fu-logger';
import ShoppingView from '../../memberView/shopping/shopping-view';


function ShoppingContainer() {
	const itemState = useSelector((state) => state.shopping);
	const session = useSelector((state) => state.session);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		// dispatch(actions.init());
	}, []);

	fuLogger.log({level:'TRACE',loc:'ShoppingContainer::render',msg:"Hi there"});
    return (
		<ShoppingView/>
	);
}

export default ShoppingContainer;
