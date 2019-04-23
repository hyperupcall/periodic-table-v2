import Vue from "vue";
import atomPlacements from "../../../../../wolf/generic-atom-data/placement.json";

const state = {
    // TODO: Rename periodLabels to periodLabelActive etc.
    // 7
    periodLabelsActive: new Array(7).fill({ active: false }),
    periodLabelLastActive: -1,
    // 18
    groupLabelsActive: new Array(18).fill({ active: false }),
    groupLabelLastActive: -1
};

const getters = {};

const mutations = {
    updateActiveLabels: function(state, atomIndex) {
        let atomPlacement = atomPlacements[atomIndex];

        // Reset the old values
        Vue.set(state.periodLabelsActive, state.periodLabelLastActive, {
            active: false
        });
        Vue.set(state.groupLabelsActive, state.groupLabelLastActive, {
            active: false
        });

        // Set the new values
        Vue.set(state.periodLabelsActive, atomPlacement.period - 1, {
            active: true
        });
        Vue.set(state.groupLabelsActive, atomPlacement.group - 1, { active: true });

        // Store which value just got updated, so we don't have to traverse over whole
        // `periodLabelsIsActive` to find the one active element
        state.periodLabelLastActive = atomPlacement.period - 1;
        state.groupLabelLastActive = atomPlacement.group - 1;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
