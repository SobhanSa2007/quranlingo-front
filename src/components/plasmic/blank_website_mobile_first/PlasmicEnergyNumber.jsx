// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pgSfCFo9UF4777TfUQAq8w
// Component: 5_Y0di5blnq0
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: pgSfCFo9UF4777TfUQAq8w/projectcss
import sty from "./PlasmicEnergyNumber.module.css"; // plasmic-import: 5_Y0di5blnq0/css

createPlasmicElementProxy;

export const PlasmicEnergyNumber__VariantProps = new Array();

export const PlasmicEnergyNumber__ArgProps = new Array();

const $$ = {};

function PlasmicEnergyNumber__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {"5"}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicEnergyNumber__ArgProps,
          internalVariantPropNames: PlasmicEnergyNumber__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEnergyNumber__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEnergyNumber";
  } else {
    func.displayName = `PlasmicEnergyNumber.${nodeName}`;
  }
  return func;
}

export const PlasmicEnergyNumber = Object.assign(
  // Top-level PlasmicEnergyNumber renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicEnergyNumber
    internalVariantProps: PlasmicEnergyNumber__VariantProps,
    internalArgProps: PlasmicEnergyNumber__ArgProps
  }
);

export default PlasmicEnergyNumber;
/* prettier-ignore-end */