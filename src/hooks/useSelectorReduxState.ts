import { useSelector, TypedUseSelectorHook } from "react-redux"

import { RootState } from "@/redux"

export const useSelectorReduxState: TypedUseSelectorHook<RootState> = useSelector