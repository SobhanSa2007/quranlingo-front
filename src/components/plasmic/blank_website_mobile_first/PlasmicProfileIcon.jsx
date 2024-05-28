// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pgSfCFo9UF4777TfUQAq8w
// Component: 1g1hBhQX_CnB
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: pgSfCFo9UF4777TfUQAq8w/projectcss
import sty from "./PlasmicProfileIcon.module.css"; // plasmic-import: 1g1hBhQX_CnB/css
import profileIconpng0FFEt0ULTcpA from "./images/profileIconpng.png"; // plasmic-import: 0fFEt0uLTcpA/picture

createPlasmicElementProxy;

export const PlasmicProfileIcon__VariantProps = new Array();

export const PlasmicProfileIcon__ArgProps = new Array();

const $$ = {};

function PlasmicProfileIcon__RenderFunc(props) {
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
    <PlasmicImg__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      displayHeight={"auto"}
      displayMaxHeight={"none"}
      displayMaxWidth={"100%"}
      displayMinHeight={"0"}
      displayMinWidth={"0"}
      displayWidth={"10%"}
      loading={"lazy"}
      src={{
        src: profileIconpng0FFEt0ULTcpA,
        fullWidth: 256,
        fullHeight: 256,
        aspectRatio: undefined
      }}
    />
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
          internalArgPropNames: PlasmicProfileIcon__ArgProps,
          internalVariantPropNames: PlasmicProfileIcon__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfileIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileIcon";
  } else {
    func.displayName = `PlasmicProfileIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileIcon = Object.assign(
  // Top-level PlasmicProfileIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicProfileIcon
    internalVariantProps: PlasmicProfileIcon__VariantProps,
    internalArgProps: PlasmicProfileIcon__ArgProps
  }
);

export default PlasmicProfileIcon;
/* prettier-ignore-end */
